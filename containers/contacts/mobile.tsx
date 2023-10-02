import React from "react";
import Image from "next/image";
import { Field, Form } from "houseform";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { z } from "zod";

import { IconEmail, IconLocation, IconPhone } from "@components/icons";

const ContactsMobile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <header>
        <Image
          src="/assets/images/logo-white.png"
          width={131}
          height={23}
          alt="FederItaly logo"
        />
        <div className="mt-3 px-3 space-y-3">
          <div className="flex items-center">
            <IconLocation className="h-6 w-5 stroke-white" />
            <p className="ml-2 text-xs font-medium">
              Segreteria Nazionale Via Magenta, 5 00185 Roma, Italy
            </p>
          </div>
          <div className="flex items-center">
            <IconPhone className="h-5 w-5 fill-white" />
            <p className="ml-2 text-xs font-medium">
              +39 351 569 2010 | +39 06 92915346
            </p>
          </div>
          <div className="flex items-center">
            <IconEmail className="h-5 w-5 fill-white" />
            <p className="ml-2 text-xs font-medium">info@federitaly.it</p>
          </div>
          <hr className="translate-y-2 border-1 border-[#D1D3D499]" />
        </div>
      </header>
      <section className="relative w-full flex flex-1 flex-col pt-5 h-full">
        <header className="h-12">
          <h2 className="text-[0.9375rem] font-semibold">
            {t("Contacts.form.title")}
          </h2>
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
              toast.error(t("Contacts.form.error_message"));
              return;
            }

            toast.success(t("Contacts.form.success_message"));
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
                  .min(1, t("Contacts.form.validation_errors.min_length"))}
              >
                {({ value, setValue, onBlur, errors }) => (
                  <>
                    <div className="flex flex-col rounded-lg bg-[#5E5E75E3] px-4 py-1.5">
                      <label
                        htmlFor="name"
                        className="text-[0.625rem] font-medium text-[#DADADA]"
                      >
                        {t("Contacts.form.fields_labels.name")}
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
                  .min(1, t("Contacts.form.validation_errors.min_length"))}
              >
                {({ value, setValue, onBlur, errors }) => (
                  <>
                    <div className="flex flex-col rounded-lg bg-[#5E5E75E3] px-4 py-1.5">
                      <label
                        htmlFor="phone-number"
                        className="text-[0.625rem] font-medium text-[#DADADA]"
                      >
                        {t("Contacts.form.fields_labels.phone_number")}
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
                  .email(t("Contacts.form.validation_errors.email"))}
              >
                {({ value, setValue, onBlur, errors }) => (
                  <>
                    <div className="flex flex-col rounded-lg bg-[#5E5E75E3] px-4 py-1.5">
                      <label
                        htmlFor="email"
                        className="text-[0.625rem] font-medium text-[#DADADA]"
                      >
                        {t("Contacts.form.fields_labels.email")}
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
                  .min(1, t("Contacts.form.validation_errors.min_length"))}
              >
                {({ value, setValue, onBlur, errors }) => (
                  <>
                    <div className="flex flex-col rounded-lg bg-[#5E5E75E3] px-4 py-1.5">
                      <label
                        htmlFor="company-name"
                        className="text-[0.625rem] font-medium text-[#DADADA]"
                      >
                        {t("Contacts.form.fields_labels.company_name")}
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
                  .min(1, t("Contacts.form.validation_errors.min_length"))}
              >
                {({ value, setValue, onBlur, errors }) => (
                  <>
                    <div className="flex flex-col rounded-lg bg-[#5E5E75E3] px-4 py-1.5">
                      <label
                        htmlFor="website"
                        className="text-[0.625rem] font-medium text-[#DADADA]"
                      >
                        {t("Contacts.form.fields_labels.website")}
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
                  .min(1, t("Contacts.form.validation_errors.min_length"))}
              >
                {({ value, setValue, onBlur, errors }) => (
                  <>
                    <div className="flex flex-col rounded-lg bg-[#5E5E75E3] px-4 py-1.5">
                      <label
                        htmlFor="message"
                        className="text-[0.625rem] font-medium text-[#DADADA]"
                      >
                        {t("Contacts.form.fields_labels.message")}
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
                {t("Contacts.form.action")}
              </button>
            </form>
          )}
        </Form>
      </section>
    </>
  );
};

export default ContactsMobile;
