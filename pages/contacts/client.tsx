import { useTranslations } from "@hooks/useTranslations";
import { Field, Form } from "houseform";
import { toast } from "react-toastify";
import { z } from "zod";

const ContactsContent = () => {
  const t = useTranslations("Contacts");

  return (
    <section className="relative w-full flex flex-1 flex-col pt-5 h-full">
      <header className="h-12">
        <h2 className="text-[0.9375rem] font-semibold">{t("form.title")}</h2>
      </header>
      <Form
        onSubmit={({
          name,
          phoneNumber,
          email,
          companyName,
          website,
          message,
        }) => {
          // TODO: logic to send the form data somewhere
          const err = false;

          if (err) {
            toast.error(t("form.error_message"));
            return;
          }

          toast.success(t("form.success_message"));
        }}
      >
        {({ isValid, submit }) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="absolute left-0 top-[calc(3rem+1.25rem)] min-h-fit w-full flex flex-1 flex-col overflow-y-scroll pb-16 pt-2 space-y-2"
          >
            <Field
              name="name"
              onBlurValidate={z
                .string()
                .min(1, t("form.validation_errors.min_length"))}
            >
              {({ value, setValue, onBlur, errors }) => (
                <>
                  <div className="flex flex-col rounded-lg bg-[#5E5E75E3] px-4 py-1.5">
                    <label
                      htmlFor="name"
                      className="text-[0.625rem] font-medium text-[#DADADA]"
                    >
                      {t("form.fields_labels.name")}
                    </label>
                    <input
                      id="name"
                      value={value}
                      onBlur={onBlur}
                      onChange={(e) => setValue(e.target.value)}
                      className="bg-transparent text-sm font-semibold text-[#FBFBFB] outline-none"
                    />
                  </div>
                  {errors.map((error) => (
                    <p key={error} className="mt-1 text-xs text-red-500">
                      {error}
                    </p>
                  ))}
                </>
              )}
            </Field>
            <Field
              name="phoneNumber"
              onBlurValidate={z
                .string()
                .min(1, t("form.validation_errors.min_length"))}
            >
              {({ value, setValue, onBlur, errors }) => (
                <>
                  <div className="flex flex-col rounded-lg bg-[#5E5E75E3] px-4 py-1.5">
                    <label
                      htmlFor="phone-number"
                      className="text-[0.625rem] font-medium text-[#DADADA]"
                    >
                      {t("form.fields_labels.phone_number")}
                    </label>
                    <input
                      id="phone-number"
                      value={value}
                      onBlur={onBlur}
                      onChange={(e) => setValue(e.target.value)}
                      className="bg-transparent text-sm font-semibold text-[#FBFBFB] outline-none"
                    />
                  </div>
                  {errors.map((error) => (
                    <p key={error} className="mt-1 text-xs text-red-500">
                      {error}
                    </p>
                  ))}
                </>
              )}
            </Field>
            <Field
              name="email"
              onBlurValidate={z
                .string()
                .email(t("form.validation_errors.email"))}
            >
              {({ value, setValue, onBlur, errors }) => (
                <>
                  <div className="flex flex-col rounded-lg bg-[#5E5E75E3] px-4 py-1.5">
                    <label
                      htmlFor="email"
                      className="text-[0.625rem] font-medium text-[#DADADA]"
                    >
                      {t("form.fields_labels.email")}
                    </label>
                    <input
                      id="email"
                      value={value}
                      onBlur={onBlur}
                      onChange={(e) => setValue(e.target.value)}
                      className="bg-transparent text-sm font-semibold text-[#FBFBFB] outline-none"
                    />
                  </div>
                  {errors.map((error) => (
                    <p key={error} className="mt-1 text-xs text-red-500">
                      {error}
                    </p>
                  ))}
                </>
              )}
            </Field>
            <Field
              name="companyName"
              onBlurValidate={z
                .string()
                .min(1, t("form.validation_errors.min_length"))}
            >
              {({ value, setValue, onBlur, errors }) => (
                <>
                  <div className="flex flex-col rounded-lg bg-[#5E5E75E3] px-4 py-1.5">
                    <label
                      htmlFor="company-name"
                      className="text-[0.625rem] font-medium text-[#DADADA]"
                    >
                      {t("form.fields_labels.company_name")}
                    </label>
                    <input
                      id="company-name"
                      value={value}
                      onBlur={onBlur}
                      onChange={(e) => setValue(e.target.value)}
                      className="bg-transparent text-sm font-semibold text-[#FBFBFB] outline-none"
                    />
                  </div>
                  {errors.map((error) => (
                    <p key={error} className="mt-1 text-xs text-red-500">
                      {error}
                    </p>
                  ))}
                </>
              )}
            </Field>
            <Field
              name="website"
              onBlurValidate={z
                .string()
                .min(1, t("form.validation_errors.min_length"))}
            >
              {({ value, setValue, onBlur, errors }) => (
                <>
                  <div className="flex flex-col rounded-lg bg-[#5E5E75E3] px-4 py-1.5">
                    <label
                      htmlFor="website"
                      className="text-[0.625rem] font-medium text-[#DADADA]"
                    >
                      {t("form.fields_labels.website")}
                    </label>
                    <input
                      id="website"
                      value={value}
                      onBlur={onBlur}
                      onChange={(e) => setValue(e.target.value)}
                      className="bg-transparent text-sm font-semibold text-[#FBFBFB] outline-none"
                    />
                  </div>
                  {errors.map((error) => (
                    <p key={error} className="mt-1 text-xs text-red-500">
                      {error}
                    </p>
                  ))}
                </>
              )}
            </Field>
            <Field
              name="message"
              onBlurValidate={z
                .string()
                .min(1, t("form.validation_errors.min_length"))}
            >
              {({ value, setValue, onBlur, errors }) => (
                <>
                  <div className="flex flex-col rounded-lg bg-[#5E5E75E3] px-4 py-1.5">
                    <label
                      htmlFor="message"
                      className="text-[0.625rem] font-medium text-[#DADADA]"
                    >
                      {t("form.fields_labels.message")}
                    </label>
                    <textarea
                      id="message"
                      value={value}
                      onBlur={onBlur}
                      onChange={(e) => setValue(e.target.value)}
                      className="h-24 resize-none bg-transparent text-sm font-semibold text-[#FBFBFB] outline-none"
                    />
                  </div>
                  {errors.map((error) => (
                    <p key={error} className="mt-1 text-xs text-red-500">
                      {error}
                    </p>
                  ))}
                </>
              )}
            </Field>
            <button
              disabled={!isValid}
              type="submit"
              className="fixed bottom-4 left-1/2 h-[2.8125rem] w-[calc(100vw-2rem)] rounded-xl from-[#2563EB] to-[#3A4D78] bg-gradient-to-b px-6 text-lg font-bold text-white -translate-x-1/2"
            >
              {t("form.action")}
            </button>
          </form>
        )}
      </Form>
    </section>
  );
};

export default ContactsContent;
