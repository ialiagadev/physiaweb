import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// Función para autorizar con Google
async function authorize() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  
  return auth;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, horario } = body;
    
    // Validación básica
    if (!nombre || !email || !telefono || !horario) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }
    
    // Autorizar con Google
    const auth = await authorize();
    const sheets = google.sheets({ version: 'v4', auth });
    
    // ID de tu hoja de cálculo (extraído de la URL que proporcionaste)
    const spreadsheetId = '1bbvSxVLepRHNAJHcrnP8rTTzAIBhoG80kJ5vWOaLEYk';
    
    // Nombre de la hoja donde quieres guardar los datos
    const sheetName = 'Leads potenciales';
    
    // Fecha actual formateada
    const fecha = new Date().toLocaleDateString('es-ES');
    
    // Preparar los datos para insertar
    const values = [[fecha, nombre, email, telefono, horario]];
    
    // Insertar datos en la hoja
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:E`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Datos guardados correctamente',
      response: response.data
    });
    
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud', details: error },
      { status: 500 }
    );
  }
}
