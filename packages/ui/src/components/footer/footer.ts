export interface AcvFooterProps {
  /**
   * Height of the Footer
   * @defaultValue 64px
   */
  height?: string

  /**
   * Background color of the Footer
   * @values transparent, primary, secondary, success, warning, danger, info, light, dark
   */
  color?: string
}

export interface AcvFooterSlots {
  /**
   * The default slot content
   */
  default: void
  /**
   * Used to pass a custom aside content
   */
  aside: void
}
