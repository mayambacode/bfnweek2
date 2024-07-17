import Link from "next/link"
import getFormattedDate from "../../../lib/getFormattedDate"

type Props = {
    post: BlogPost
}

export default function ListItem({post}: Props) {
        const {id, title, date} = post
        // const formattedDate = getFormattedDate(date)

    return (
        <ul>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            {/* <p>{formattedDate}</p> */}
        </ul>
  )
}