export interface CardProps {
    avatar?: string;
    content?: string;
    mark?: string,
    rating?: string;
    name?: string;
    content2?: string;
}

const Card = ({
    avatar,
    content,
    mark,
    rating,
    name,
    content2,
  }: CardProps) => {
    return (
        <div className="border-grey-500 border w-full max-w-48 flex flex-col rounded-2xl bg-white p-4 justify-center items-center">
            {avatar ? <img src={avatar} className="mb-3 w-12 h-12" alt="Avatar"/> : ""}
            {content ? <p className="mb-3 text-center text-xs">{content}</p> : ""}
            {mark ? <h4 className="mb-3 font-mont-semibold text-lg text-center">{mark}</h4> : ""}
            {rating ? <img src={rating} className="mb-3 w-20" alt="Rating"/> : ""}
            {name ? <h4 className="mb-3 font-mont-semibold text-sm text-center">{name}</h4> : ""}
            {content2 ? <p className="text-center text-xs">{content2}</p> : ""}
        </div>
    );
};

export default Card;