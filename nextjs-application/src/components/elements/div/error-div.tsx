import style from "./error-div.module.css";

export type ErrorDivProps = {
    children: React.ReactNode;
};

export const ErrorDiv = ({ children }: ErrorDivProps): JSX.Element => {
    return <div className={style.error_message}>{children}</div>;
};
export default ErrorDiv;
