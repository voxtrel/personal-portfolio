import { IconLink, Icon } from "../atoms";
import linkedInLogo from "../../assets/LinkedIn_logo.png";
import githubLogo from "../../assets/Github_logo.png";
import githubLogoDark from "../../assets/Github_logo_dark.png";

export default function IconLinksRow({
  className = "",
  sizeClasses = "h-7 w-7 md:h-8 md:w-8",
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <IconLink
        href="https://www.linkedin.com/in/yaniel-gonzalez/"
        label="LinkedIn"
        iconSrc={linkedInLogo}
        className="opacity-90 hover:opacity-100 transition-opacity"
        imgClassName={`${sizeClasses} object-contain transition-transform duration-200 hover:scale-110`}
      />
      <IconLink
        href="https://github.com/voxtrel"
        label="GitHub"
        className="opacity-90 hover:opacity-100 transition-opacity"
      >
        <Icon
          src={githubLogo}
          className={`${sizeClasses} object-contain transition-transform duration-200 hover:scale-110 hide-on-lemonade-sm`}
        />
        <Icon
          src={githubLogoDark}
          className={`${sizeClasses} object-contain transition-transform duration-200 hover:scale-110 show-on-lemonade-sm`}
        />
      </IconLink>
    </div>
  );
}
