"use client";

type InvitationGateProps = {
  onOpen: () => void;
};

export default function InvitationGate({ onOpen }: InvitationGateProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#120d0b] px-6">
      <div className="w-full max-w-2xl rounded-[2rem] border border-[#d4b06a]/20 bg-white/5 p-10 text-center backdrop-blur-md">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4b06a]">
          Wedding Invitation
        </p>

        <h1 className="text-4xl font-semibold text-[#f8f3ec] md:text-6xl">
          Ishan & Ashini
        </h1>

        <p className="mx-auto mt-5 max-w-xl leading-8 text-[#f8f3ec]/80">
          With joyful hearts and the blessings of our families, we warmly invite
          you to celebrate our Kandyan wedding ceremony.
        </p>

        <button
          onClick={onOpen}
          className="mt-8 rounded-full border border-[#d4b06a] bg-[#d4b06a] px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#1a120e] transition hover:scale-[1.02]"
        >
          Open Invitation
        </button>
      </div>
    </div>
  );
}