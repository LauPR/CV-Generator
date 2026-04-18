type Props = {
    children: React.ReactNode;
}

export default function Card({children} : Props){
    return(
        <div className="
            bg-background-secondary
            border-border
            border-2
            
        ">
            {children}
        </div>
    )
}