import { test } from "node:test";
import assert from "node:assert/strict";
import { mountShowDesignAction } from "../src/client/editor/shell-actions.js";

test("show design opens current full view without submitting", async () => {
  let click,
    opened = 0,
    label,
    mounted;
  const anchor = {};
  const createAction = (id, text) => {
    assert.equal(id, "btn-mandar-diseno");
    label = text;
    return {
      ancla: anchor,
      boton: {
        addEventListener(event, fn) {
          assert.equal(event, "click");
          click = fn;
        },
      },
    };
  };
  const root = {
    getElementById(id) {
      assert.equal(id, "btn-entera");
      return {
        click() {
          opened++;
        },
      };
    },
  };
  mountShowDesignAction(
    {
      prepend(value) {
        mounted = value;
      },
    },
    createAction,
    root,
  );
  assert.equal(label, "Mostrar diseño");
  assert.equal(mounted, anchor);
  click();
  assert.equal(opened, 1);
});
