
//contents：<p>タグに表示する
const Text = (props: { contents: string }) => {
    const { contents } = props

    return <p className='text' >{contents}</p>

}

const Message = (props:{}) =>{
    const contents1:string = 'This id parents component'
    const contents2:string = 'Message uses Text component'

    return (
        <div>
            <Text contents={contents1} />
            <Text contents={contents2} />
        </div>
    )
}

export default Message