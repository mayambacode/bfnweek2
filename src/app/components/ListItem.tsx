import Link from "next/link"
import getFormattedDate from "../../../lib/getFormattedDate"

type Props = {
    post: BlogPost
}

export default function ListItem({post}: Props) {
        const {id, title, date} = post
        const formattedDate = getFormattedDate(date)

    return (
        <li>
            <Link href={`/posts/${id}`}>
                <a>
                    <h2>{title}</h2>
                    <br />
                    <p>{formattedDate}</p>
                </a>
            </Link>
        </li>
  )
}