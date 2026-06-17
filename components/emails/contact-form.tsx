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
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail = ({ name, email, message }: ContactFormEmailProps) => {
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
              src="https://www.image2url.com/r2/default/images/1781591531870-e52dd09a-02e0-4712-9aaa-2b8b74a0b789.png"
              width={140}
              height={19}
              alt="Stylish Living Furniture"
            />

            <Hr className="my-6 border-gray-200" />

            <Text className="mb-0 font-semibold text-[#121212]">
              Name: {name}
            </Text>
            <Text className="mt-0 text-gray-500 text-xs">Email: {email}</Text>

            {/* Body */}
            <Text className="mt-6 whitespace-pre-wrap leading-relaxed">
              Message: {message}
            </Text>

            <Hr className="my-6 border-gray-200" />

            {/* Footer */}
            <Text className="mt-4 text-center text-gray-500 text-xs tracking-tight">
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
