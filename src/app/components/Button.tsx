import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "./ui/utils";

/**
 * Botao do portfolio. Espelha `Base/Acao/Button` da biblioteca Cosmic Sky,
 * que tem 36 variantes: Variant 3 x Size 3 x State 4.
 *
 * O Figma manda no desenho. Cada classe abaixo veio de um token de la:
 *
 *   Figma                            codigo
 *   color/interactive/primary        bg-primary
 *   color/interactive/primary-hover  bg-primary-hover
 *   color/interactive/primary-pressed bg-primary-pressed
 *   color/text/on-brand              text-primary-foreground
 *   color/text/tertiary              text-muted-foreground
 *   color/text/primary               text-foreground
 *   color/text/brand                 text-primary
 *   color/text/quaternary            text-quaternary
 *   color/border/control             border-border-control
 *   color/border/control-hover       border-border-control-hover
 *   color/border/subtle              border-border-subtle
 *   color/surface/elevated           bg-secondary
 *   color/bg/brand                   bg-primary/10
 *
 * Os tres tamanhos mudam SO o padding, e o corpo e sempre 14px, como na
 * producao e como no Figma. Altura nunca e fixa: sai do padding, que e o
 * equivalente do hug.
 *
 * Estado no Figma vira pseudo-classe aqui: Hover e :hover, Pressed e
 * :active, Disabled e :disabled. Como :disabled nao existe em <a>, quando
 * `disabled` e true o componente renderiza <button> mesmo tendo href.
 *
 * Para navegacao interna, que usa o <Link> do react-router, passe
 * `asChild` e coloque o <Link> dentro. O Button so empresta as classes e
 * quem renderiza a tag e o filho, entao o roteador continua no controle:
 *
 *   <Button asChild variant="secondary" size="large">
 *     <Link to="/">Ver os cases</Link>
 *   </Button>
 */

type Variant = "primary" | "secondary" | "ghost";
type Size = "small" | "medium" | "large";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap transition-colors";

const bySize: Record<Size, string> = {
  small: "px-4 py-2 text-sm",
  medium: "px-5 py-2.5 text-sm",
  large: "px-7 py-3 text-sm",
};

const byVariant: Record<Variant, string> = {
  primary: cn(
    "font-semibold bg-primary text-primary-foreground",
    "hover:bg-primary-hover active:bg-primary-pressed",
    "disabled:bg-secondary disabled:text-quaternary",
  ),
  secondary: cn(
    "font-medium border border-border-control text-muted-foreground",
    "hover:border-border-control-hover hover:text-foreground",
    "active:border-border-control-hover active:bg-primary/10 active:text-primary",
    "disabled:border-border-subtle disabled:text-quaternary",
  ),
  ghost: cn(
    "font-medium text-muted-foreground",
    "hover:text-foreground active:text-primary",
    "disabled:text-quaternary",
  ),
};

type Props = {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
  href?: string;
  disabled?: boolean;
  asChild?: boolean;
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "children" | "href" | "disabled"
>;

export default function Button({
  variant = "primary",
  size = "medium",
  iconLeft,
  iconRight,
  children,
  className,
  href,
  disabled,
  asChild,
  ...rest
}: Props) {
  const classes = cn(base, bySize[size], byVariant[variant], className);
  const content = (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );

  if (asChild) {
    return (
      <Slot className={classes} {...rest}>
        {children}
      </Slot>
    );
  }

  if (href && !disabled) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {content}
    </button>
  );
}
