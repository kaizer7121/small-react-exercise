import ToggleSidebarButton from '~/layouts/partials/Header/ToggleSidebarButton';

import {
  AppBar,
  Container,
  Stack,
  Toolbar,
} from '~/components/MuiComponents';

interface IHeaderProps {
  broken: boolean;
  onToggled: () => void;
  collapsed: boolean;
  onCollapsed: () => void;
}
export function Header(props: IHeaderProps) {
  return (
    <AppBar position='sticky' sx={{ zIndex: 999 }}>
      <Container disableGutters maxWidth={false}>
        <Toolbar sx={{ backgroundColor: '#fff' }}>
          <Stack alignItems='center' direction='row'>
            <ToggleSidebarButton {...props} />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
