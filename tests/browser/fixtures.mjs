// Public URLs and visible template choices are compatibility contracts.
export const templates = [
  ["clasica", "vista-socio-lobby.html"],
  ["azul", "vista-azul.html"],
  ["blaze", "vista-blaze.html"],
  ["brasa", "vista-brasa.html"],
  ["duplicada", "resort.html"],
  ["bateupix", "bateupix.html"],
  ["casinotower30", "casinotower30.html"],
  ["bet30", "bet30.html"],
  ["celuapuestas40", "celuapuestas40.html"],
  ["pinaplay", "pinaplay.html"],
  ["multisala", "multisala.html"],
  ["lunabet", "lunabet.html"],
  ["cobraya", "cobraya.html"],
];
export const viewports = [
  { name: "desktop", device: "compu", width: 1440, height: 1000 },
  { name: "mobile", device: "celular", width: 393, height: 852 },
];
export function designHash(
  template = "clasica",
  device = "compu",
  view = "lobby",
) {
  return `#v=1&p=fdca55&f=1c1c1c&t=29251c&n=MiCasino&vista=${view}&disp=${device}&pl=${template}`;
}
