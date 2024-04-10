export default function Pills(props: any) {
    if (props.type === "light") {
        return (
            <div className="flex flex-row justify-around gap-2 font-semibold  bg-primaryWhite text-primaryBlack px-10 py-3 rounded-full hover:text-[#000] hover:bg-[#fff]">
                {props.children}
            </div>
        );
    }
    if (props.type === "dark") {
        return (
            <div className="flex flex-row justify-around gap-2 font-semibold  bg-primaryBlack  text-primaryWhite px-10 py-3 rounded-full hover:text-[#fff] hover:bg-[#000]">
                {props.children}
            </div>
        );
    }
}