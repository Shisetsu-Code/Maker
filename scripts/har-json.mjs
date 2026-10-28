/** An import error whose message never includes captured response data. */
export class HarJsonError extends Error {
  constructor(code, message, resourcePath) {
    super(`HAR ${resourcePath}: ${message}`);
    this.name = 'HarJsonError';
    this.code = code;
  }
}

/**
 * Read a captured JSON response after its host and pathname have been allowed.
 * Pass only that allowlisted pathname as resourcePath, never the captured URL.
 * HAR text is already decoded unless content.encoding explicitly says base64.
 */
export function parseHarJson(content, resourcePath) {
  const fail = (code, message) => {
    throw new HarJsonError(code, message, resourcePath);
  };
  const encoding = content?.encoding;
  if (encoding !== undefined && encoding !== '' && encoding !== 'base64') {
    fail('ERR_HAR_ENCODING', 'unsupported response encoding');
  }
  if (typeof content?.text !== 'string') {
    fail('ERR_HAR_JSON', 'missing JSON response text');
  }

  let text = content.text;
  if (encoding === 'base64') {
    // Accept wrapped or unpadded base64, but never Buffer.from's silent repair
    // of illegal characters, incomplete bytes, or invalid padding.
    const encoded = text.replace(/[\t\n\r ]/g, '');
    if (!/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}(?:==)?|[A-Za-z0-9+/]{3}=?)?$/.test(encoded)) {
      fail('ERR_HAR_BASE64', 'invalid base64 response');
    }
    const bytes = Buffer.from(encoded, 'base64');
    if (bytes.toString('base64').replace(/=+$/, '') !== encoded.replace(/=+$/, '')) {
      fail('ERR_HAR_BASE64', 'invalid base64 response');
    }
    try {
      text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    } catch {
      fail('ERR_HAR_UTF8', 'JSON response is not valid UTF-8');
    }
  }

  try {
    return JSON.parse(text);
  } catch {
    // A native SyntaxError can echo the JSON body, so do not retain its cause.
    fail('ERR_HAR_JSON', 'invalid JSON response');
  }
}
