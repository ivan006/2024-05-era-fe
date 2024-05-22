<template>
    <div>
        <input type="file" @change="uploadImage" ref="fileInput" />
        <button @click="submit">Upload</button>
    </div>
</template>

<script>
import Image from '@/models/Image' // Assuming you have an Image model in Vuex ORM

export default {
    name: 'ListsUpload',
    data() {
        return {
            file: null,
        }
    },
    methods: {
        async uploadImage(dbEvent) {
            this.file = dbEvent.target.files[0]
        },
        async submit() {
            if (this.file) {
                let formData = new FormData()
                formData.append('image', this.file)

                try {
                    // Assuming you have a static method in your Image model that handles the upload.
                    await Image.Upload(formData)
                    console.log('Image uploaded successfully!')
                } catch (error) {
                    console.error('Error uploading image:', error)
                }
            }
        },
    },
}
</script>
