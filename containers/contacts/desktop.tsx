import React from "react";
import Image from "next/image";
import { Field, Form } from "houseform";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { z } from "zod";

import HeaderDesktop from "@components/HeaderDesktop";

const ContactsDesktop: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="relative pb-24">
      <HeaderDesktop title={t("Common.sidebar.navigation.contacts")} />
      <section className="relative container mx-auto grid grid-cols-12 mt-20">
        <div className="col-span-5">
          <span className="text-[#475467] text-[1.25rem] font-medium">
            {t("Contacts.us")}
          </span>
          <div className="mt-10">
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/images/gps-icon.png"
                alt="gps-icon"
                width={56}
                height={56}
              />
              <div>
                <p className="text-[1.5rem] text-[#1D2939] font-semibold">
                  Segreteria Nazionale
                </p>
                <p className="text-[1.125rem] text-[#667085]">
                  Via Magenta, 5 00185 Roma, Italy
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <Image
                src="/assets/images/phone-icon.png"
                alt="gps-icon"
                width={56}
                height={56}
              />
              <div>
                <p className="text-[1.5rem] text-[#1D2939] font-semibold">
                  {t("Contacts.form.fields_labels.phone_number")}
                </p>
                <p className="text-[1.125rem] text-[#667085]">
                  +39 351 569 2010
                </p>
                <p className="text-[1.125rem] text-[#667085]">
                  +39 06 92915346
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <Image
                src="/assets/images/email-icon.png"
                alt="gps-icon"
                width={56}
                height={56}
              />
              <div>
                <p className="text-[1.5rem] text-[#1D2939] font-semibold">
                  {t("Contacts.form.fields_labels.email")}
                </p>
                <p className="text-[1.125rem] text-[#667085]">
                  info@federitaly.it
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7">
          <div className="w-full bg-[#F8F8F8] px-12 py-8 rounded-[1rem]">
            <p className="text-[#101828] text-[1.375rem] font-bold">
              {t("Contacts.form.title")}
            </p>
            <p className="text-[#3D3A3A] text-[1rem] font-medium">
              {t("Contacts.form.subtitle")}
            </p>
          </div>

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
                className="w-full flex flex-1 flex-col space-y-6 mt-4"
              >
                <div className="flex justify-center items-center space-x-4">
                  <Field
                    name="name"
                    onBlurValidate={z
                      .string()
                      .min(1, t("Contacts.form.validation_errors.min_length"))}
                  >
                    {({ value, setValue, onBlur, errors }) => (
                      <div className="flex flex-col rounded-lg bg-[#00000014] px-4 py-1.5 w-1/2">
                        <label
                          htmlFor="name"
                          className="text-[0.625rem] font-medium text-[#303a4280]"
                        >
                          {t("Contacts.form.fields_labels.name")}
                        </label>
                        <input
                          id="name"
                          value={value}
                          onBlur={onBlur}
                          onChange={(e) => setValue(e.target.value)}
                          className="bg-transparent text-sm font-semibold text-[#303a4280] outline-none"
                        />
                        {errors.map((error) => (
                          <p key={error} className="mt-1 text-xs text-red-500">
                            {error}
                          </p>
                        ))}
                      </div>
                    )}
                  </Field>
                  <Field
                    name="phoneNumber"
                    onBlurValidate={z
                      .string()
                      .min(1, t("Contacts.form.validation_errors.min_length"))}
                  >
                    {({ value, setValue, onBlur, errors }) => (
                      <div className="flex flex-col rounded-lg bg-[#00000014] px-4 py-1.5 w-1/2">
                        <label
                          htmlFor="phone-number"
                          className="text-[0.625rem] font-medium text-[#303a4280]"
                        >
                          {t("Contacts.form.fields_labels.phone_number")}
                        </label>
                        <input
                          id="phone-number"
                          value={value}
                          onBlur={onBlur}
                          onChange={(e) => setValue(e.target.value)}
                          className="bg-transparent text-sm font-semibold text-[#303a4280] outline-none"
                        />
                        {errors.map((error) => (
                          <p key={error} className="mt-1 text-xs text-red-500">
                            {error}
                          </p>
                        ))}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <Field
                    name="email"
                    onBlurValidate={z
                      .string()
                      .email(t("Contacts.form.validation_errors.email"))}
                  >
                    {({ value, setValue, onBlur, errors }) => (
                      <div className="flex flex-col rounded-lg bg-[#00000014] px-4 py-1.5  w-1/2">
                        <label
                          htmlFor="email"
                          className="text-[0.625rem] font-medium text-[#303a4280]"
                        >
                          {t("Contacts.form.fields_labels.email")}
                        </label>
                        <input
                          id="email"
                          value={value}
                          onBlur={onBlur}
                          onChange={(e) => setValue(e.target.value)}
                          className="bg-transparent text-sm font-semibold text-[#303a4280] outline-none"
                        />
                        {errors.map((error) => (
                          <p key={error} className="mt-1 text-xs text-red-500">
                            {error}
                          </p>
                        ))}
                      </div>
                    )}
                  </Field>
                  <Field
                    name="companyName"
                    onBlurValidate={z
                      .string()
                      .min(1, t("Contacts.form.validation_errors.min_length"))}
                  >
                    {({ value, setValue, onBlur, errors }) => (
                      <div className="flex flex-col rounded-lg bg-[#00000014] px-4 py-1.5 w-1/2">
                        <label
                          htmlFor="company-name"
                          className="text-[0.625rem] font-medium text-[#303a4280]"
                        >
                          {t("Contacts.form.fields_labels.company_name")}
                        </label>
                        <input
                          id="company-name"
                          value={value}
                          onBlur={onBlur}
                          onChange={(e) => setValue(e.target.value)}
                          className="bg-transparent text-sm font-semibold text-[#303a4280] outline-none"
                        />
                        {errors.map((error) => (
                          <p key={error} className="mt-1 text-xs text-red-500">
                            {error}
                          </p>
                        ))}
                      </div>
                    )}
                  </Field>
                </div>
                <Field
                  name="website"
                  onBlurValidate={z
                    .string()
                    .min(1, t("Contacts.form.validation_errors.min_length"))}
                >
                  {({ value, setValue, onBlur, errors }) => (
                    <div className="flex flex-col rounded-lg bg-[#00000014] px-4 py-1.5">
                      <label
                        htmlFor="website"
                        className="text-[0.625rem] font-medium text-[#303a4280]"
                      >
                        {t("Contacts.form.fields_labels.website")}
                      </label>
                      <input
                        id="website"
                        value={value}
                        onBlur={onBlur}
                        onChange={(e) => setValue(e.target.value)}
                        className="bg-transparent text-sm font-semibold text-[#303a4280] outline-none"
                      />
                      {errors.map((error) => (
                        <p key={error} className="mt-1 text-xs text-red-500">
                          {error}
                        </p>
                      ))}
                    </div>
                  )}
                </Field>
                <Field
                  name="message"
                  onBlurValidate={z
                    .string()
                    .min(1, t("Contacts.form.validation_errors.min_length"))}
                >
                  {({ value, setValue, onBlur, errors }) => (
                    <div className="flex flex-col rounded-lg bg-[#00000014] px-4 py-1.5">
                      <label
                        htmlFor="message"
                        className="text-[0.625rem] font-medium text-[#303a4280]"
                      >
                        {t("Contacts.form.fields_labels.message")}
                      </label>
                      <textarea
                        id="message"
                        value={value}
                        onBlur={onBlur}
                        onChange={(e) => setValue(e.target.value)}
                        className="h-24 resize-none bg-transparent text-sm font-semibold text-[#303a4280] outline-none"
                      />
                      {errors.map((error) => (
                        <p key={error} className="mt-1 text-xs text-red-500">
                          {error}
                        </p>
                      ))}
                    </div>
                  )}
                </Field>
                <button
                  disabled={!isValid}
                  type="submit"
                  className="rounded-xl text-lg font-bold text-white py-3 bg-[#0093FF] w-[29rem] self-center"
                >
                  {t("Contacts.form.action")}
                </button>
              </form>
            )}
          </Form>
        </div>
      </section>
    </div>
  );
};

export default ContactsDesktop;
