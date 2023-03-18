interface ImportMetaEnv {
  readonly PUBLIC_USERNAME: string;
  readonly PUBLIC_DESCRIPTION: string;
  readonly PUBLIC_CONTACT_EMAIL_ADDRESS: string;
  readonly PUBLIC_CONTACT_TWITTER_NAME: string;
  readonly PUBLIC_CONTACT_GITHUB_NAME: string;
  readonly PUBLIC_CONTACT_ZENN_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
