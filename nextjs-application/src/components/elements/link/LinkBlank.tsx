import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

export type LinkBlankProps = {
    href: string;
    children: ReactNode;
    ariaLabel?: string;
};

/**
 * target="_blank"で開くときに使用。target="_blank"で開くことがわかるような画像をリンクの右に配置
 */
export const LinkBlank = ({ href, children, ariaLabel }: LinkBlankProps): JSX.Element => {
    return (
        <Link href={href} target="_blank" aria-label={ariaLabel}>
            {children}
            <Image src="/images/blank.png" alt="" height={15} width={15} />
        </Link>
    );
};

export default LinkBlank;
