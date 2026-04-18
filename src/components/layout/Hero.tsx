import Card from "../ui/Card";

export default function Hero(){
    return(
        <div className="
            flex
            items-center
            justify-center
        ">
            <Card>
                <h1 className="text-foreground text-7xl">
                    Welcome To <span className="text-primary">CV Generator!</span>
                </h1>
            </Card>
        </div>
    )
}