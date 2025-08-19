import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "jp"],
    defaultLocale: "en"
});

export const config = {
    matcher: [`/((?!_next|.*\\..*).*)`]
}

// import type { NextRequest } from 'next/server';
// import { NextResponse } from 'next/server';

// export function middleware() {
//     return new NextResponse("MIDDLEWARE FIRED!", {status: 200})
// }

// export const config = {
//   matcher: ['/:path*'],
// };
