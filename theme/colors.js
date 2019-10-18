export const palette = {
  black: "#000000",
  white: "#ffffff",
  white25: "rgba(250,250,250,0.25)",
  offWhite: "#F1F3F5",
  green: "#2AE596",
  greenDark: "#78A431",
  greenLight: "#D2EEA5",
  tealDark: "#00796B",
  teal: "#26A69A",
  orangeDark: "#C46300",
  orange: "#F57C00",
  orangeLight: "#FABD7F",
  orangeLightSecondary: "#FCD7B2",
  red: "#E64A19",
  navyDark: "#112838",
  navyLight: "#DFDFE6",
  gray69: "#697177",
  grayDark: "#88939B",
  gray: "#B4B8BB",
  grayLight: "#F1F3F5",
  text: "#193A51",
  blackPearl: "#14181b",
  purple: "#201F24",
}

export const colors = {
  palette,
  ceruleanBlue: "#254FD0",
  kleinBlue: "#0034bb",
  navyBlue: "#000090",
  catalinaBlue: "#082175",
  flushOrange: "#ff8000",
  trinidad: "#e75300",
  white: "#ffffff",
  iron: "#e1e4e7",
  dustyGray: "#959595",
  rollingStone: "#7E8085",
  emperor: "#534e53",
  shark: "#2c2e30",
  black: "#000000",
  submarine: "#b8bfc6",
  rockBlue: "#99a7cc",
  regentGray: "#7c86a2",
  lynch: "#6b7897",
  catskillWhite: "#EFF6F8",
  geyser: "#D5E0E3",
  swansDown: "#dcedf1",
  ziggurat: "#AFD4DA",
  gothic: "#648e99",
  casal: "#2f6574",
  primary: "#000000",

  /**
   * The screen background.
   */
  background: palette.black,
  /**
   * The default color of text in many components.
   */
  text: palette.text,
  /**
   * The color for links.
   */
  link: palette.greenDark,
  /**
   * Secondary information.
   */
  dim: palette.grayLight,
  /**
   * Error messages and icons.
   */
  error: palette.red,
  authStatusBackgroundColor: palette.blackPearl,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)"
}

export default colors
