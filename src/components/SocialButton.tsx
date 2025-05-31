
import React from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialButtonProps extends Omit<ButtonProps, 'variant'> {
  href?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "saffron" | "green" | "whatsapp" | "facebook";
  isDirectWhatsapp?: boolean;
  whatsappNumber?: string;
}

const SocialButton = ({ 
  children, 
  href, 
  variant = "default", 
  className, 
  isDirectWhatsapp = false,
  whatsappNumber,
  ...props 
}: SocialButtonProps) => {
  const handleClick = () => {
    if (isDirectWhatsapp && whatsappNumber) {
      window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    } else if (href) {
      window.open(href, '_blank');
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "saffron":
        return "bg-saffron hover:bg-saffron/90 text-white";
      case "green":
        return "bg-green hover:bg-green/90 text-white";
      case "whatsapp":
        return "bg-green-500 hover:bg-green-600 text-white";
      case "facebook":
        return "bg-blue-600 hover:bg-blue-700 text-white";
      default:
        return "";
    }
  };

  return (
    <Button
      variant={variant === "saffron" || variant === "green" || variant === "whatsapp" || variant === "facebook" ? "default" : variant}
      className={cn(getVariantStyles(), className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SocialButton;
