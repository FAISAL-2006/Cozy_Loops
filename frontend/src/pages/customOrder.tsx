import { Mail, Sparkles } from "lucide-react";

export default function CustomOrder() {
  return (
    <div className="min-h-screen bg-[#FAF7F3] flex items-center justify-center px-6">

      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-md p-10 text-center">

        <div className="w-20 h-20 mx-auto rounded-full bg-[#F6F1EC] flex items-center justify-center mb-6">
          <Sparkles className="text-[#8B5E3C]" size={36} />
        </div>

        <h1 className="text-4xl font-bold text-[#3B2F2F] mb-4">
          Custom Crochet Orders
        </h1>

        <p className="text-gray-600 leading-8 mb-8">
          Looking for something unique? We'd love to create a handmade crochet
          piece just for you.
        </p>

        <div className="bg-[#F9F7F4] rounded-2xl p-6 text-left space-y-3">

          <h2 className="font-semibold text-lg">
            Please include:
          </h2>

          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Reference images (if any)</li>
            <li>Size or dimensions</li>
            <li>Preferred colors</li>
            <li>Material preferences</li>
            <li>Deadline (if required)</li>
            <li>Any additional notes</li>
          </ul>

        </div>

        <a
          href="mailto:yourmail@gmail.com?subject=Custom Crochet Order"
          className="mt-8 inline-flex items-center gap-2 bg-[#8B5E3C] text-white px-7 py-3 rounded-full hover:opacity-90 transition"
        >
          <Mail size={20} />
          Email Your Request
        </a>

        <p className="mt-6 text-gray-500">
          We'll get back to you within <b>24–48 hours.</b>
        </p>

      </div>

    </div>
  );
}