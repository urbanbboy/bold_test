import { FC } from "react";

type IconProps = {
    color?: string;
    size?: string | number;
    width?: string;
    height?: string;
} & React.SVGAttributes<SVGElement>;


export const Card1Icon: FC<IconProps> = ({
    ...attributes
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            {...attributes}
        >
            <g clipPath="url(#clip0_2046_12791)">
                <path
                    fill="#fff"
                    d="M4.75 11a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M9.75 11a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M4.75 1.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M9.75 1.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M14.75 1.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M19.75 1.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
                ></path>
                <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M1.25 1.25v27a2.5 2.5 0 0 0 2.5 2.5h27"
                ></path>
                <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M8.5 26A2.5 2.5 0 0 1 6 23.5V21a2.5 2.5 0 1 1 5 0v2.5A2.5 2.5 0 0 1 8.5 26M18.5 26a2.5 2.5 0 0 1-2.5-2.5V11a2.5 2.5 0 1 1 5 0v12.5a2.5 2.5 0 0 1-2.5 2.5M28.25 26a2.5 2.5 0 0 1-2.5-2.5V3.75a2.5 2.5 0 1 1 5 0V23.5a2.5 2.5 0 0 1-2.5 2.5"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_2046_12791">
                    <path fill="#fff" d="M0 0h32v32H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
};

export const Card2Icon: FC<IconProps> = ({
    ...attributes
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            {...attributes}
        >
            <g clipPath="url(#clip0_2046_12762)">
                <g
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    clipPath="url(#clip1_2046_12762)"
                >
                    <path d="M23.75 23.197c.909.91.988 2.466.089 3.366-.9.899-2.368.819-3.277-.09l-.188-.16c.91.91.932 2.369.032 3.268-.899.9-2.379.89-3.289-.019l-.812-.805M27.16 20.061c.899.9.899 2.372 0 3.27-.9.9-2.372.9-3.271 0l-.139-.134-.285-.286"></path>
                    <path d="m30.75 8.75-9.812-8c-3.283 0-6.42 1.36-8.665 3.756L9.813 7.13c-.991.992-1.01 2.633 0 3.605a2.5 2.5 0 0 0 3.5-.034l1.135-1.134a5.326 5.326 0 0 1 7.219-.29l8.409 7.16c.899.9.899 2.371 0 3.27-.9.9-2.372.9-3.27 0l-.257-.256M13.458 21.497c-.9-.9-2.37-.9-3.27 0l-1.834 1.815c-.91.91-.918 2.39-.019 3.29.9.899 2.38.89 3.29-.02l1.833-1.814c.9-.9.9-2.371 0-3.27M10.208 18.247c-.899-.9-2.37-.9-3.27 0l-2.097 2.057c-.9.9-.9 2.371 0 3.27.882.883 2.318.82 3.22-.03l2.15-2.107c.9-.9.897-2.29-.003-3.19M16.13 25.491c-.924-.923-2.393-.977-3.317-.053l-.75.75c-.923.923-.899 2.446.025 3.37a2.38 2.38 0 0 0 3.359 0l.682-.708a2.38 2.38 0 0 0 0-3.359"></path>
                    <path d="M6.949 14.987c-.9-.9-2.371-.9-3.27 0L1.924 16.68c-.9.9-.9 2.371 0 3.27.899.9 2.37.9 3.27 0l1.754-1.693c.9-.9.9-2.37 0-3.27M14.063 2.644A11.88 11.88 0 0 0 7.628.75L1.25 7.125"></path>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_2046_12762">
                    <path fill="#fff" d="M0 0h32v32H0z"></path>
                </clipPath>
                <clipPath id="clip1_2046_12762">
                    <path fill="#fff" d="M0-.5h32v32H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
};

export const Card3Icon: FC<IconProps> = ({
    ...attributes
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            fill="none"
            viewBox="0 0 32 33"
            {...attributes}
        >
            <g
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                clipPath="url(#clip0_2046_12813)"
            >
                <path d="M6.066 25.896h12.768a4.47 4.47 0 0 0 2.833-1.012l8.627-7.062a2.094 2.094 0 0 0 .322-2.915c-.726-.923-2.095-1.045-3.004-.302l-6.259 5.113"></path>
                <path d="M12.637 20.803h6.824a2.094 2.094 0 0 0 0-4.189h-3.68a9.7 9.7 0 0 1-3.093-.492 8.5 8.5 0 0 0-2.684-.424c-2.363 0-4.063.916-4.063.916M.938 16.614v11.74H5.94v-11.74z"></path>
                <path d="M20.208 14.808A5.953 5.953 0 1 0 11.79 6.39a5.953 5.953 0 0 0 8.418 8.42"></path>
                <path d="m14.035 10.62 1.296 1.296 2.634-2.635"></path>
            </g>
            <defs>
                <clipPath id="clip0_2046_12813">
                    <path fill="#fff" d="M0 .5h32v32H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
};