import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PdfUploader } from "@/components/PdfUploader";
import { ImageUploader } from "@/components/ImageUploader";
import { DisplayResult } from "@/components/DisplayResult";
import { Link } from "react-router-dom";

const Home = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [file, setFile] = useState<string | null>(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Invoice Information Extractor</h1>
      <div className="mb-4">
        You can use these sample PDFs and image to check this.{" "}
        <Link
          to={
            "https://drive.google.com/drive/folders/1Q7sU_eiisOvtCAFCRSesyMDkVsMtNF7h"
          }
          target="_blank"
          className=" text-blue-600 underline"
        >
          Link
        </Link>
      </div>
      <Tabs defaultValue="pdf" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pdf">PDF Upload</TabsTrigger>
          <TabsTrigger value="image">Image Upload</TabsTrigger>
        </TabsList>
        <TabsContent value="pdf">
          {PdfUploader({
            setPdfFile,
            pdfFile,
            setFile,
            file,
            setResult,
            setError,
          })}
        </TabsContent>
        <TabsContent value="image">
          {ImageUploader({
            setImageFile,
            imageFile,
            setFile,
            file,
            setResult,
            setError,
          })}
        </TabsContent>
      </Tabs>
      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {DisplayResult(result)}
    </div>
  );
};

export default Home;
