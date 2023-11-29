
type HelpTextProps = {
    fileName: string;
    count: number;
    highlight?: boolean;
}

function HelpText(props: HelpTextProps) {
    const { highlight, count, fileName } = props;

    return (
        <p>
            Edit <code 
                    style={{ color: highlight === true ? "red" : "black"}}
                 >{fileName}
                 </code> 
             and save to test hot module reloading. The count is {count}
        </p>
    );
}

export default HelpText;