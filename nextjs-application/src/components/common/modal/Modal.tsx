"use client";
import { useRouter } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useRef, useCallback, MouseEventHandler, useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();
    // const [close, setClose] = useState(false);

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick: MouseEventHandler = useCallback(() => {
        // setClose(true);
        onDismiss();
    }, [onDismiss]);

    // if (close) return null;

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <button
                    className={styles.btnClose}
                    type="button"
                    aria-label="閉じる"
                    ref={wrapper}
                    onClick={onClick}
                >
                    ×
                </button>
                {children}
            </div>
            <div className={styles.background} onClick={onClick} ref={overlay} />
        </div>
    );
};
export default Modal;
