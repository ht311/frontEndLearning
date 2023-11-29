import styles from "./Submit.module.css";

export type SubmitProps = {
    value: string | number;
};

export const Submit: React.FC<SubmitProps> = ({ value }: SubmitProps): JSX.Element => {
    return <input className={styles.submit} type="submit" value={value} />;
};

export default Submit;
