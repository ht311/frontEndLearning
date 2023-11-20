import { FormEventHandler } from "react";
import { UserAuth } from "@contexts/userAuth/userAuth";
import InputTextForm from "@components/elements/input/input-text-form";

export type LoginFromArgs = {
    submitEvent: () => void;
};

export const LoginFrom: React.FC<LoginFromArgs> = ({ submitEvent }): JSX.Element => {
    // form押下時の処理
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const url = form.get("url") || "";
        const apikey = form.get("apikey") || "";
        const res = await handler(url.toString(), apikey.toString());

        if (res.isOk) {
            const userAuth: UserAuth = {
                url: url.toString(),
                apikey: apikey.toString(),
                isAuth: true,
            };
            window.localStorage.setItem("userAuth", JSON.stringify(userAuth));
            alert("LoginOK!!!");
            submitEvent();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                url:
                <InputTextForm
                    inputName="url"
                    placeholder="https://{url}.backlog.comのurl部分を入力してください"
                />
            </label>
            <label>
                apikey:
                <InputTextForm
                    inputName="apikey"
                    placeholder="APIキーはbacklogの個人設定から払い出せます"
                />
            </label>
            <input type="submit" value="ログイン！" />
        </form>
    );
};
export default LoginFrom;

export type Response = {
    isOk: boolean;
};

const handler = async (url: string, apikey: string): Promise<Response> =>
    fetch(`https://${url}.backlog.com/api/v2/space?apiKey=${apikey}`)
        .then((response) => {
            if (!response.ok) {
                return { isOk: false };
            }

            //return response.json()
            return { isOk: true };
        })
        .catch((error: Error) => {
            console.error(error);
            return { isOk: false };
        });
