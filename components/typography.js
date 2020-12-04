import { Heading, Text, Label } from 'theme-ui';

export const Heading1 = ({ sx, ...props }) => (
  <Heading
    sx={{
      fontSize: [6, 10],
      fontWeight: 'bold',
      lineHeight: 'heading',
      my: '1em',
      ...sx,
    }}
    {...props}
  />
);

export const Heading2 = ({ sx, ...props }) => (
  <Heading
    sx={{
      fontSize: [5, 8],
      fontWeight: 'bold',
      lineHeight: 'heading',
      my: '1em',
      ...sx,
    }}
    {...props}
  />
);

export const Heading3 = ({ sx, ...props }) => (
  <Heading
    sx={{
      fontSize: [4, 6],
      fontWeight: 'bold',
      lineHeight: 'heading',
      my: '1em',
      ...sx,
    }}
    {...props}
  />
);

export const Heading4 = ({ sx, ...props }) => (
  <Heading
    sx={{
      fontSize: [3, 5],
      fontWeight: 'bold',
      lineHeight: 'heading',
      my: '1em',
      ...sx,
    }}
    {...props}
  />
);

export const Body1 = ({ sx, ...props }) => (
  <Text
    sx={{ fontSize: [3, 4], lineHeight: 'body', my: '0.5em', ...sx }}
    {...props}
  />
);

export const Body2 = ({ sx, ...props }) => (
  <Text
    sx={{ fontSize: [2, 3], lineHeight: 'body', my: '0.75em', ...sx }}
    {...props}
  />
);

export const Caption = ({ sx, ...props }) => (
  <Text
    sx={{ fontSize: [1, 2], lineHeight: '1.2', my: '0.5em', ...sx }}
    {...props}
  />
);

export const FormLabel = ({ sx, ...props }) => (
  <Label
    sx={{
      display: 'flex',
      alignItems: 'center',
      fontSize: [3, 4],
      fontWeight: 'bold',
      height: '48px',
      lineHeight: '48px',
      ...sx,
    }}
    {...props}
  />
);
