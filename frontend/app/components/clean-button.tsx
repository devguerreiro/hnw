"use client";

import { useTransition } from "react";

import { EraserIcon, LoaderCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
  onFinish: () => void;
};

export function CleanButton({ onFinish }: Props) {
  const [isPending, startTransition] = useTransition();

  function clean() {
    startTransition(async () => {
      const response = await fetch("/api/clean", { method: "DELETE" });
      if (response.ok) {
        onFinish();
      }
    });
  }

  return (
    <Button onClick={clean}>
      {isPending ? (
        <>
          <LoaderCircleIcon className="animate-spin" />
          Cleaning
        </>
      ) : (
        <>
          <EraserIcon />
          Clear
        </>
      )}
    </Button>
  );
}
