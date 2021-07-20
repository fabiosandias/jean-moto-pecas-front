import 'styled-components'
import { IDefaultTheme } from 'interfaces/IDefaultTheme';

declare module 'styled-components' {
  export const DefaultTheme: IDefaultTheme;
}