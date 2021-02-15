function rot13(args) {
  const key = 13; // Key refers to how much we want yo shift
  return args
    .toUpperCase()
    .replace(/[A-Z]/g, (c) => String.fromCharCode(((c.charCodeAt(0) - 65 + key) % 26) + 65));
}

export { rot13 };
