import { ImageUploadForm, FontInfoForm } from "../features/fontcreation";

export default function FontCreationPage() {
    return(
        <div style={{margin:"0 auto", marginTop:"100px", display:"flex", gap: "30px"}}>
            <ImageUploadForm />
            <FontInfoForm />
        </div>
    );
}