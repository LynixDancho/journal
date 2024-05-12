import { serialize } from 'cookie';

// Set up a cookie with SameSite=None and Secure attributes
const cookieOptions = {
  maxAge: 60 * 60 * 24 * 7, // 7 days
  httpOnly: true,
  secure: true,
  sameSite: 'None',
};

// Serialize the cookie with the appropriate attributes
const cookieSerialized = serialize('cookieName', 'cookieValue', cookieOptions);

// Set the cookie in the response header
res.setHeader('Set-Cookie', cookieSerialized);
