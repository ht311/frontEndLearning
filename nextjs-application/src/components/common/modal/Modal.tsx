"use client";
import { useRouter } from "next/navigation";
import { useRef, useCallback, MouseEventHandler } from "react";
import styles from "./Modal.module.css";

const Modal = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick: MouseEventHandler = useCallback(() => {
        onDismiss();
    }, [onDismiss]);

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
