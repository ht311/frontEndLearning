import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

export type LinkBlankProps = {
    href: string;
    children: ReactNode;
};

export const LinkBlank = ({ href, children }: LinkBlankProps): JSX.Element => {
    return (
        <Link href={href} target="_blank">
            {children}
            <Image src="/images/blank.png" alt="" height={15} width={15} />
        </Link>
    );
};

export default LinkBlank;
