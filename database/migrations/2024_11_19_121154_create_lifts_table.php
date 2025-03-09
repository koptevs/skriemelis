<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lifts', function (Blueprint $table) {
            $table->id();
            $table->string('reg_number', 32)->unique();
            $table->foreignId('lift_manager_id')->nullable();
            $table->enum('type', ['elektriskais', 'hidrauliskais']);
            $table->enum('category', ['1', '2', '3', 'CE']);
            $table->string('factory_number', 32)->nullable();
            $table->string('model', 64)->nullable();
            $table->decimal('speed', 8, 2)->nullable();
            $table->smallInteger('load')->unsigned()->nullable();
            $table->string('manufacturer', 128)->nullable();
            $table->string('installer', 128)->nullable();
            $table->smallInteger('installation_year')->unsigned(); // -32768...32767  unsigned -> 0...65535  (2 bytes)
            $table->tinyInteger('floors_serviced')->unsigned()->nullable();  // -128...127  unsigned -> 0...255 (1 byte)
            $table->string('address', 256);
            $table->string('address_city', 64);
            $table->string('address_country', 64);
            $table->string('address_postal_code', 8);
            $table->string('building_series', 16)->nullable();
            $table->string('bir_url', 256)->nullable();
            $table->string('google_coordinates', 128)->nullable();
            $table->string('entry_code', 128)->nullable();
            $table->enum('inspection_status', ['X', '0', '1', '2', '3'])->default('X');
            $table->date('next_inspection_date')->nullable();
            $table->text('notes')->nullable();
            $table->smallInteger('created_by')->unsigned(); // -32768...32767  unsigned -> 0...65535  (2 bytes)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lifts');
    }
};
