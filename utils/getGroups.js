export const flags = {
  qatar: "/flags/qatar.png",
  ecuador: "/flags/ecuador.png",
  senegal: "/flags/senegal.png",
  paisesBajos: "/flags/paisesBajos.png",
  inglaterra: "/flags/inglaterra.png",
  iran: "/flags/iran.png",
  gales: "/flags/gales.png",
  argentina: "/flags/argentina.png",
  USA: "/flags/USA.png",
  arabiaSaudita: "/flags/arabiaSaudita.png",
  mexico: "/flags/mexico.png",
  polonia: "/flags/polonia.png",
  francia: "/flags/francia.png",
  australia: "/flags/australia.png",
  dinamarca: "/flags/dinamarca.png",
  tunez: "/flags/tunez.png",
  españa: "/flags/españa.png",
  costaRica: "/flags/costaRica.png",
  alemania: "/flags/alemania.png",
  japon: "/flags/japon.png",
  belgica: "/flags/belgica.png",
  croacia: "/flags/croacia.png",
  canada: "/flags/canada.png",
  marruecos: "/flags/marruecos.png",
  brasil: "/flags/brasil.png",
  serbia: "/flags/serbia.png",
  suiza: "/flags/suiza.png",
  camerun: "/flags/camerun.png",
  portugal: "/flags/portugal.png",
  ghana: "/flags/ghana.png",
  uruguay: "/flags/uruguay.png",
  coreaDelSur: "/flags/coreaDelSur.png",
};

export const getGroups = () => {
  const WorldCupGrups = [
    {
      groupName: "A",
      teams: ["Qatar", "Ecuador", "Senegal", "Netherlands"],
      badges: [flags.qatar, flags.ecuador, flags.senegal, flags.paisesBajos],
    },
    {
      groupName: "B",
      teams: ["England", "Iran", "USA", "Wales"],
      badges: [flags.inglaterra, flags.iran, flags.USA, flags.gales],
    },
    {
      groupName: "C",
      teams: ["Argentina", "Saudi Arabia", "Mexico", "Poland"],
      badges: [
        flags.argentina,
        flags.arabiaSaudita,
        flags.mexico,
        flags.polonia,
      ],
    },
    {
      groupName: "D",
      teams: ["France", "Australia", "Denmark", "Tunisia"],
      badges: [flags.francia, flags.australia, flags.dinamarca, flags.tunez],
    },
    {
      groupName: "E",
      teams: ["Spain", "Costa Rica", "Germany", "Japan"],
      badges: [flags.españa, flags.costaRica, flags.alemania, flags.japon],
    },
    {
      groupName: "F",
      teams: ["Belgium", "Croatia", "Canada", "Morocco"],
      badges: [flags.belgica, flags.croacia, flags.canada, flags.marruecos],
    },
    {
      groupName: "G",
      teams: ["Brazil", "Serbia", "Switzerland", "Cameroon"],
      badges: [flags.brasil, flags.serbia, flags.suiza, flags.camerun],
    },
    {
      groupName: "H",
      teams: ["Portugal", "Ghana", "Uruguay", "South Korea"],
      badges: [flags.portugal, flags.ghana, flags.uruguay, flags.coreaDelSur],
    },
  ];
  return WorldCupGrups;
};
