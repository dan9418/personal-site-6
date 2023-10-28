
const PageHeader: React.FC<{ text: string }> = ({ text }) => {
    return (
        <h1 className="text-4xl font-black text-center">{text}</h1>
    )
}

export default PageHeader