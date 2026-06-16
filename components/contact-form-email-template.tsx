import {
  Body,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Tailwind,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  message: string;
}

const ContactFormEmail = ({ message }: ContactFormEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head>
          <Font
            fontFamily="Geist"
            fallbackFontFamily={["Arial", "sans-serif"]}
            webFont={{
              url: "https://fonts.gstatic.com/s/geist/v1/gyByhwUxId8gMEwcGFU.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body
          className="bg-[#F9FAFB] font-mono text-[#121212] text-sm leading-relaxed"
          style={{ fontFamily: "Geist, Arial, sans-serif" }}
        >
          <Container className="mx-auto max-w-xl p-6">
            {/* Header */}
            <Img
              src="https://github.com/shadcn.png"
              width={48}
              height={48}
              alt="Stylish Living Furniture"
            />

            <Hr className="my-4 border-gray-200" />

            {/* Body */}
            <Text className="whitespace-pre-wrap leading-relaxed">
              {message}
            </Text>

            <Hr className="my-4 border-gray-200" />

            {/* Footer */}
            <Text className="mt-2 text-center text-gray-500 text-xs tracking-tight">
              This is an automated notification.
            </Text>

            <Text className="text-center text-gray-500 text-xs tracking-tight">
              &copy; Stylish Living Furniture
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export { ContactFormEmail };
