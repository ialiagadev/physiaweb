import { NextResponse } from "next/server"
import { google } from "googleapis"
import nodemailer from "nodemailer"

// Función para autorizar con Google
async function authorize() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL || "physia-sheets-integration@physia-web.iam.gserviceaccount.com",
      private_key: (
        process.env.GOOGLE_PRIVATE_KEY ||
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCjaCGEq//48K8P\nAGM6KWTuEbdCJvSF3PfMQIw/rVaW6TBfuASUmk4R3MOCLH0eeVAwH7Fd+4VtBACS\nc6r8fp/vxhEmebhXBhZrt1+GjXqDyaaOj3l9dFvRHzuqVq6G1oqIgqA9oqQifWm+\nfrnPRG1FabwZ8cUhsQApOLyPIGSaER0mK74I42HdS15cznKkuKfV9KWDM14a1nTM\noXfxwDR1Y/PfyS9TpMSHKXxTXR0npriifo26j+N9bMgUJTiV8/2uRd/WK2BzPEN8\nNh+UEtRjTD8Cav50n0myPpCT/cCqn3mwNjGc09lpu+t2doGzIofgkh71KLADyVvo\nlreLRuZpAgMBAAECggEACD+zyXXBUzjF2DUFzU7U+ID5G6QfHeQnYi6JUJbt0xUX\nIGMytVRgx91kGoh9Ece/+N3wtIouPxrqSHpW/Fi2tteXJWEUTC2o02vgrPMsEcZh\nMRB5v+UwKWCxQLUQKbW01+qi2i8BUs26mSeJNmGsPnUgThL6skEJfWCO1uQkup45\nOoIPPmYEOrI/825j8i+4NcRbm3nEfMG11CyTjJL0qVNRpKecP5llDNj+EcBA+xNh\nFAQPfPQlsjjJ6N5gT8nFGIek04/kWKwPaDY55/eKeUuhl1lTJ60vPMtohRR0qUtS\nSYqtNh78fsJslAwfFhmv1Slx/K96Tio8nrJIw6ddHQKBgQDPusg8wDBZiZ+zp/RM\nQQWL+lp+Hmbc0NssCS1Qi9eg6CJrGebiKdE4RvBV8dzzOnmpzANMJZLm9Sq4pCqj\nD5waG9ZFNGaxvItQ3y6BEZbqY4n2wgfiGGRD7O8FVxVJ136vmT5yjHko4kAVvlWo\nxRwi4mJIaiJBkIRZs7QX4KFm0wKBgQDJYLa1RiAq6YuHmbeBhlCFeFtKxPq60cTQ\nkzBJdaewCCM0HvR3rjnYlKruZzOnxeP5JAgZ2+WX1PS/RafMh4yep44drCi3cJQ1\nKk2Wcnu5piTzcbXyNrNbC6as9rnZgQdjs0djy+ivuThBcqNgsHk7bPK/ZW8TgSFa\nWRS0aMkwUwKBgQCDZER1UKcEa21taIW4mcQVZvRII5iygRSwhNl5wgpQx6PFlKua\nUBL7ArvP0N0Np+X+hYFsb7O8jERKZ+RkIWJ+jS75tQxjzbtdGt3CW8rWVMGWJ+Ju\nmzkIUdxZx1w6yahjD44VTE7ykjEwz6REzPBgDEtYPHGQgQWF64m1NKtCawKBgQC3\n1q/VeyhgpIZ5i04oU6rsvfxxnLPcmyXW15gsZ9lm7Xbd3SiGnao3WzlUnSheEF1X\nk5pFqSbHXmT0vK08Hb61E/e8hO9Cz+atRmpAX1EuIUv4ZqWYcnF4O4G0wyTVOGK7\nlO4mX/+TdD60GOinm1OBeat+KSanIqqFJW+uZz7L+wKBgHGZKPwpCg5GwyU0+l50\nu2AhO6keuFh36OvAr55yYrsADk3AIPqZx7DEllgr5ZP6LFGjDUxZyGStHHGa7bjM\nRwWi4fWUiL3C7xky4nhgJn12eMzbTcX5crkrL2N3zKDkRqfsmqGp04iwhMYMCwJx\naV6sdVRh5dO6J1LvGpiqm2Mm\n-----END PRIVATE KEY-----\n"
      ).replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })

  return auth
}

// Configuración del transporte de correo
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "prueba.usuarios.physia@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, horario } = body

    // Validación básica
    if (!nombre || !email || !telefono || !horario) {
      return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 })
    }

    // Autorizar con Google
    const auth = await authorize()
    const sheets = google.sheets({ version: "v4", auth })

    // ID de tu hoja de cálculo
    const spreadsheetId = "1bbvSxVLepRHNAJHcrnP8rTTzAIBhoG80kJ5vWOaLEYk"

    // Nombre de la hoja donde quieres guardar los datos
    const sheetName = "Leads potenciales"

    // Fecha actual formateada
    const fecha = new Date().toLocaleDateString("es-ES")

    // Preparar los datos para insertar
    const values = [[fecha, nombre, email, telefono, horario]]

    // Insertar datos en la hoja
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:E`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    })

    // Enviar correos electrónicos
    try {
      const fechaHora = new Date().toLocaleString("es-ES")

      // 1. Email para el administrador (copia)
      const adminMailOptions = {
        from: "prueba.usuarios.physia@gmail.com",
        to: "prueba.usuarios.physia@gmail.com",
        subject: "¡Nuevo registro para demo de PHYSIA!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
            <h2 style="color: #7c3aed; text-align: center; margin-bottom: 20px;">Nuevo registro para demo de PHYSIA</h2>
            <p style="margin-bottom: 15px;">Se ha recibido una nueva solicitud de demo con los siguientes datos:</p>
            <div style="background-color: #f9f7ff; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <p><strong>Fecha y hora:</strong> ${fechaHora}</p>
              <p><strong>Nombre:</strong> ${nombre}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${telefono}</p>
              <p><strong>Preferencia horaria:</strong> ${horario}</p>
            </div>
            <p style="color: #6b7280; font-size: 14px; text-align: center;">Este es un correo automático, por favor no responder.</p>
          </div>
        `,
      }

      // 2. Email para el usuario
      const userMailOptions = {
        from: "prueba.usuarios.physia@gmail.com",
        to: email, // Correo del usuario que se registró
        subject: "¡Gracias por registrarte en la demo de PHYSIA!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
            <h2 style="color: #7c3aed; text-align: center; margin-bottom: 20px;">¡Gracias por registrarte, ${nombre}!</h2>
            <p style="margin-bottom: 15px;">Hemos recibido tu solicitud para la demo gratuita de PHYSIA. Estos son los datos que nos has proporcionado:</p>
            <div style="background-color: #f9f7ff; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <p><strong>Nombre:</strong> ${nombre}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${telefono}</p>
              <p><strong>Preferencia horaria:</strong> ${horario}</p>
            </div>
            <p style="margin-bottom: 15px;">Nos pondremos en contacto contigo lo antes posible para coordinar tu demo gratuita de 14 días.</p>
            <p style="margin-bottom: 15px;">Si tienes alguna pregunta mientras tanto, no dudes en contactarnos.</p>
            <p style="margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">Equipo de PHYSIA</p>
          </div>
        `,
      }

      // Enviar ambos correos
      await transporter.sendMail(adminMailOptions)
      await transporter.sendMail(userMailOptions)

      console.log("Correos enviados correctamente")

      return NextResponse.json({
        success: true,
        message: "Datos guardados correctamente y correos enviados",
        response: response.data,
      })
    } catch (emailError) {
      console.error("Error al enviar los correos:", emailError)

      // Aún devolvemos éxito porque los datos se guardaron en la hoja
      return NextResponse.json({
        success: true,
        message: "Datos guardados correctamente, pero hubo un problema al enviar los correos",
        emailError: emailError instanceof Error ? emailError.message : String(emailError),
        response: response.data,
      })
    }
  } catch (error) {
    console.error("Error al procesar la solicitud:", error)
    return NextResponse.json(
      {
        error: "Error al procesar la solicitud",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
