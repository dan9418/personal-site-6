export type HeaderTag = 'h1' | 'h2' | 'h3' | 'h4';

const STYLE_MAP: Record<HeaderTag, string> = {
    h1: 'text-4xl font-black',
    h2: 'text-2xl font-bold',
    h3: 'text-xl font-bold',
    h4: 'text-l font-bold'
}


const PageHeader: React.FC<{ level?: HeaderTag, text: string, className?: string; isCentered?: boolean }> = ({ text, level = 'h1', className = '', isCentered }) => {
    const Tag = level;
    const center = (isCentered || level === 'h1') ? 'text-center' : '';
    return (
        <Tag className={`${STYLE_MAP[level]} ${center} ${className}`}>{text}</Tag>
    )
}

export default PageHeader