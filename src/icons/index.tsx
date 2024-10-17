import {
  Calendar,
  Clock,
  Flame,
  Tv2,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  flame: Flame,
  calendar: Calendar,
  tv: Tv2,
  clock: Clock,
  logo: ({ }: LucideProps) => (
    <svg className="mr-2" width="30" height="30" viewBox="0 0 172 129" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M74.7292 98.7415L64.5444 108.926L19.6935 64.0756L63.3448 20.4243L74.5159 31.5953C74.6193 31.6987 74.7247 31.7987 74.8321 31.8954L54.0904 52.637C53.9252 52.6297 53.7591 52.626 53.5921 52.626C47.506 52.626 42.5722 57.5598 42.5722 63.6459C42.5722 69.732 47.506 74.6658 53.5921 74.6658C59.0778 74.6658 63.6273 70.6576 64.4716 65.41L108.314 21.568L113.208 26.4624L101.244 38.426C98.0476 41.6229 98.0476 46.8062 101.244 50.0031C104.441 53.2 109.625 53.2 112.822 50.0031L124.785 38.0395L151.829 65.0829L108.027 108.885L97.8834 98.7415L118.859 77.7654C124.467 77.2504 128.859 72.5342 128.859 66.7922C128.859 60.706 123.925 55.7722 117.839 55.7722C111.8 55.7722 106.895 60.6299 106.82 66.651L86.3063 87.1644L81.1368 81.9949L88.7007 74.4309C91.8976 71.234 91.8976 66.0508 88.7007 62.8539C85.5038 59.6569 80.3206 59.6569 77.1236 62.8539L63.9472 76.0303C62.0969 77.8806 61.3175 80.3961 61.609 82.8069C61.7467 84.6983 62.5387 86.5509 63.9849 87.9971L74.7292 98.7415ZM171.482 64.6793C171.619 66.9372 170.825 69.2408 169.1 70.9661L113.886 126.18C111.925 128.141 109.216 128.899 106.677 128.454C105.016 128.199 103.419 127.431 102.14 126.152L86.3063 110.319L70.4451 126.18C68.9865 127.638 67.1144 128.431 65.2061 128.559C62.8664 128.775 60.4514 127.988 58.6601 126.196L2.39769 69.9339C0.6141 68.1503 -0.174411 65.7485 0.0321627 63.4182C0.165209 61.5189 0.957729 59.6572 2.40972 58.2052L57.6234 2.99149C60.8204 -0.205421 66.0036 -0.205421 69.2005 2.99151C69.4708 3.26183 69.7183 3.54636 69.9429 3.84268C70.0774 3.96075 70.2089 4.08395 70.3373 4.2123L86.1181 19.9931C86.2215 20.0965 86.3215 20.2019 86.4182 20.3093L102.474 4.25304C102.69 4.03699 102.916 3.83554 103.149 3.6487C106.364 1.02312 111.109 1.20944 114.108 4.20769L169.09 59.19C170.612 60.7124 171.41 62.6851 171.482 64.6793Z" fill="url(#paint0_linear_709_6)"/>
      <circle cx="117.843" cy="66.8016" r="6.19709" transform="rotate(-134.922 117.843 66.8016)" fill="black" stroke="white" strokeWidth="0.2"/>
      <circle cx="53.6167" cy="63.6266" r="6.19709" transform="rotate(-134.922 53.6167 63.6266)" fill="white" stroke="black" strokeWidth="0.2"/>
      <defs>
      <linearGradient id="paint0_linear_709_6" x1="0" y1="64.594" x2="171.497" y2="64.594" gradientUnits="userSpaceOnUse">
      <stop offset="0.459871" stopColor="#F1AA94"/>
      <stop offset="1" stopColor="#FF3D00"/>
      </linearGradient>
      </defs>
    </svg>
  ),
  hamburger: ({ ...props }: LucideProps) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 20 20"
      aria-hidden="true"
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0px"
      ></path>
    </svg>
  ),
  wrenchSrewdriver: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008z"
      />
    </svg>
  ),
};
