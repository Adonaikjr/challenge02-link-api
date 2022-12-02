import 'styled-components'

import { defaultColors } from '../theme/defaultColors'

type ThemeType = typeof defaultColors

declare module 'styled-components' {
  export interface DefaultColors extends ThemeType {}
}
