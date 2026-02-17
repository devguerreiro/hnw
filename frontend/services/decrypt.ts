"use server";

interface DecryptedData {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export async function decrypt() {
  const response = await fetch("http://localhost:3000/decrypt");

  if (!response.ok) {
    throw new Error("could not decrypt");
  }

  return (await response.json()) as DecryptedData[];
}
