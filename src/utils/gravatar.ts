import md5 from 'md5';

export const getGravatarUrl = (email: string) => {
    const baseUrl = "https://www.gravatar.com/avatar/";
    const hash = md5(email.trim().toLowerCase());
    return `${baseUrl}${hash}?d=identicon`;
}