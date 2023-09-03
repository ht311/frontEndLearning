
// 名前を入力するためのテキストボックスを返すコンポーネント
const Name = () => {
    //input要素のonchangeイベントに対するコールバック関数を定義
    const onChange =(e:React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value)
    }

    return (
        <div style={{padding:'16px', backgroundColor:'grey'}}>
            <label htmlFor="name">名前</label>
            <input id='name' className="input-name" type="text" onChange={onChange} />
        </div>
    )
}

export default Name;