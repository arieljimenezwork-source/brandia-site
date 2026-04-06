"use client";

import { useActionState } from "react";
import { subscribeEmail } from "@/app/actions";

const initialState = { error: "", success: false };

export default function SubscribeForm({ compact = false }: { compact?: boolean }) {
  const [state, formAction, pending] = useActionState(subscribeEmail, initialState);

  if (state?.success) {
    return (
      <p className="text-sm text-green-400 font-medium">
        Suscripto. Te aviso cuando haya algo nuevo.
      </p>
    );
  }

  return (
    <form action={formAction} className={`flex gap-2 ${compact ? "" : "flex-col sm:flex-row max-w-lg"}`}>
      <input
        type="email"
        name="email"
        placeholder="Tu mejor correo electrónico"
        required
        className={`px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-500/60 ${compact ? "w-56 py-2" : "flex-1"}`}
      />
      <button
        type="submit"
        disabled={pending}
        className={`px-6 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-sm rounded-xl transition-colors whitespace-nowrap ${compact ? "py-2 px-4" : "py-3"}`}
      >
        {pending ? "..." : compact ? "SUSCRIBIR" : "SUSCRIBIRME"}
      </button>
      {state?.error && (
        <p className="text-xs text-red-400 mt-1 sm:absolute sm:mt-0 sm:translate-y-10">{state.error}</p>
      )}
    </form>
  );
}
