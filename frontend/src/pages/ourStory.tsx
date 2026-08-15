import { Heart, Sparkles, GraduationCap } from "lucide-react";

export default function OurStory() {
  return (
    <div className="min-h-screen bg-[#FAF7F3] py-16 px-6">

      <div className="max-w-5xl mx-auto">

        <p className="uppercase tracking-[0.35em] text-[#A16A3A] text-sm mb-3">
          Our Story
        </p>

        <h1 className="text-5xl font-serif text-[#3B2F2F] font-bold mb-10">
          Every Stitch Has A Story
        </h1>

        <div className="bg-white rounded-3xl shadow-sm p-10 leading-9 text-gray-700">

          <p className="mb-6">
            Cozy Loops began with two engineering students from
            <span className="font-semibold text-[#8B5E3C]">
              {" "}SASTRA Deemed University
            </span>
            {" "}who shared a passion for creativity and handmade crafts.
            While balancing classes, assignments, and exams, they decided to
            turn their love for crochet into something meaningful.
          </p>

          <p className="mb-6">
            What started as a small hobby soon became a part-time business.
            Every plushie, flower, keychain, and crochet accessory is carefully
            handcrafted with patience, attention to detail, and genuine care.
            Each product is unique because every stitch is made by hand—not by
            machines.
          </p>

          <p className="mb-6">
            Between lectures, late-night study sessions, and semester exams,
            we spend our free time designing, crocheting, packing orders, and
            interacting with customers. Building Cozy Loops has taught us that
            passion and consistency can transform a simple idea into something
            people truly appreciate.
          </p>

          <p>
            Our dream is to continue growing Cozy Loops while inspiring others
            to value handmade creations and support small businesses. Every
            order you place encourages us to keep creating, learning, and
            chasing that dream.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">

            <GraduationCap
              className="mx-auto text-[#8B5E3C]"
              size={34}
            />

            <h3 className="font-semibold mt-4">
              Student Founders
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              Built while pursuing engineering at SASTRA University.
            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">

            <Heart
              className="mx-auto text-[#8B5E3C]"
              size={34}
            />

            <h3 className="font-semibold mt-4">
              Handmade With Love
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              Every product is crocheted carefully by hand with attention to
              every little detail.
            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">

            <Sparkles
              className="mx-auto text-[#8B5E3C]"
              size={34}
            />

            <h3 className="font-semibold mt-4">
              Our Mission
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              To spread happiness through unique handmade crochet creations.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}